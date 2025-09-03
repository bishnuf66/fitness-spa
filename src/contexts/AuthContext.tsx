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
        // Only try if token exists
        if (typeof window !== "undefined" && localStorage.getItem("token")) {
          const { data } = await api.get<{ success: boolean; data: User }>(
            "/api/auth/me"
          );
          if (data.success) {
            setUser(data.data);
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);
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
      const data: any = await api.post<{
        success: boolean;
        token: string;
        user: User;
      }>("/api/auth/login", { email, password });

      console.log("Login response data:", data);

      if (!data) {
        throw new Error("No data in login response");
      }

      if (!data?.token || !data?.user) {
        console.error("Missing token or user in response:", {
          token: data?.token,
          user: data?.user,
        });
        throw new Error("Invalid login response");
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("token", data?.token);
      }

      // Set the user from the login response
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

      // Register user and get token with user data
      const { data } = await api.post<{
        success: boolean;
        token: string;
        user: User;
      }>("/api/auth/register", {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        phone: userData.phone,
      });

      console.log("Signup response data:", data);

      if (!data) {
        throw new Error("No data in signup response");
      }

      const { token, user } = data;

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
