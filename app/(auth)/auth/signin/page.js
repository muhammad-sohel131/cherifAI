"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({ email: "", password: "", remember: false });
    const [error, setError] = useState(null);

    async function onSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // Hit your own API route (which can proxy to Laravel/Node backend)
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const j = await res.json().catch(() => ({}));
                throw new Error(j?.message || "Invalid credentials");
            }

            // Example: redirect after successful sign in
            window.location.href = "/dashboard";
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-100">
            {/* Left: Brand/Welcome */}
            <section className="hidden lg:flex bg-gradient-to-br from-gray-900 to-[#04d2f0] text-white">
                <div className="m-auto max-w-md p-10 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">Welcome Back</h1>
                    <p className="mt-4 text-white/90">
                        Sign in to continue your journey. Track progress, unlock badges, and keep learning.
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                        alt="Sign in illustration"
                        className="mx-auto mt-10 w-72 drop-shadow-xl"
                    />
                </div>
            </section>

            {/* Right: Form */}
            <section className="flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Don’t have an account?{" "}
                            <Link href="/auth/signup" className="text-[#04d2f0] hover:underline">
                                Create one
                            </Link>
                        </p>
                    </div>

                    {error && (
                        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                            {error}
                        </div>
                    )}

                    <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={form.password}
                                    onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-12 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((s) => !s)}
                                    className="absolute inset-y-0 right-3 my-auto text-sm text-gray-500 hover:text-gray-700"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                <input
                                    type="checkbox"
                                    checked={form.remember}
                                    onChange={(e) => setForm((f) => ({ ...f, remember: e.target.checked }))}
                                    className="h-4 w-4 rounded border-gray-300 text-[#04d2f0] focus:ring-indigo-500"
                                />
                                Remember me
                            </label>
                            <Link href="/forgot-password" className="text-sm text-[#04d2f0] hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full rounded-lg bg-[#04d2f0] px-4 py-2.5 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60"
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
