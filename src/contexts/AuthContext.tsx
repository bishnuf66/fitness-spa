"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export interface User {
  _id: string;
  id: string;
  email: string;
  name: string;
  phone: string;
  subscriptionStatus: "active" | "inactive" | "cancelled";
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: {
    name: string;
    email: string;
    password: string;
    phone?: string;
  }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true);
        // Only try if token exists
        if (typeof window !== "undefined" && localStorage.getItem("token")) {
          console.log("Checking auth status...");
          const response = await api.get<{ success: boolean; data: User }>(
            "/api/auth/me"
          );
          console.log("Auth check response:", response);

          // The API interceptor already returns response.data, so response is the actual data
          if (
            response &&
            typeof response === "object" &&
            "success" in response
          ) {
            if (response.success) {
              // The user data is in the response object directly, not in response.data
              setUser(response as unknown as User);
              return;
            }
          }

          console.log("No valid user session found");
          setUser(null);
          if (typeof window !== "undefined") {
            localStorage.removeItem("token");
          }
        } else {
          console.log("No token found in localStorage");
          setUser(null);
        }
      } catch (err) {
        console.error("Error checking auth status:", err);
        setUser(null);
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
        }
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      console.log("Attempting login with:", { email });

      // Login and get token with user data
      console.log("Sending login request...");
      const response = await api
        .post<{
          success: boolean;
          token: string;
          user: User;
        }>("/api/auth/login", { email, password })
        .then((res) => {
          console.log("Login response:", res);
          return res;
        })
        .catch((error) => {
          console.error("Login request failed:", error);
          console.error("Error response:", error.response);
          throw error;
        });

      console.log("Login response data:", response);

      if (!response) {
        console.error("No response from login API");
        throw new Error("No response from server");
      }

      // Since our API interceptor already returns response.data,
      // we can directly destructure the properties
      const { token, user } = response as any; // Temporary any type to bypass TypeScript error

      if (!token || !user) {
        console.error("Missing token or user in response:", { token, user });
        throw new Error("Invalid login response");
      }

      // Store the token in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("token", token);
      }

      // Update the user state and redirect
      setUser(user);
      router.push("/profile");
    } catch (err: any) {
      console.error("Login error:", err);
      const errorMessage =
        err.response?.data?.message || err.message || "Login failed";
      console.log("Error details:", {
        status: err.response?.status,
        data: err.response?.data,
        message: errorMessage,
      });
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData: {
    name: string;
    email: string;
    password: string;
    phone?: string;
  }) => {
    try {
      setLoading(true);
      setError(null);

      console.log("Attempting signup with:", { email: userData.email });

      // Register user and get token with user data
      const response = await api.post<{
        success: boolean;
        token: string;
        user: User;
      }>("/api/auth/register", {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        phone: userData.phone,
      });

      console.log("Signup response:", response);

      if (!response) {
        console.error("No response from signup API");
        throw new Error("No response from server");
      }

      // Since our API interceptor already returns response.data,
      // we can directly destructure the properties
      const { token, user } = response as any; // Temporary any type to bypass TypeScript error

      if (!token || !user) {
        console.error("Missing token or user in response:", { token, user });
        throw new Error("Invalid signup response");
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("token", token);
      }

      // Set the user from the signup response
      setUser(user);
      router.push("/profile");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
      // Optional: tell backend to clear server-side session if any
      try {
        await api.post("/api/auth/logout");
      } catch {}
      setUser(null);
      router.push("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
        loading,
        error,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
