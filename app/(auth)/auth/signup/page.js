"use client";

import Link from "next/link";
import { useMemo, useState } from "react";



export default function SignUpPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        accept: false,
    });
    const [showPw, setShowPw] = useState(false);
    const [showPw2, setShowPw2] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // tiny strength signal (0-4)
    const strength = useMemo(() => {
        let s = 0;
        if (form.password.length >= 8) s++;
        if (/[A-Z]/.test(form.password)) s++;
        if (/[0-9]/.test(form.password)) s++;
        if (/[^A-Za-z0-9]/.test(form.password)) s++;
        return s;
    }, [form.password]);

    async function onSubmit(e) {
        e.preventDefault();
        setError(null);

        // basic client checks
        if (!form.accept) return setError("Please accept the Terms & Privacy.");
        if (form.password !== form.confirm) return setError("Passwords do not match.");
        if (strength < 2) return setError("Password is too weak.");

        setIsLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name.trim(),
                    email: form.email.trim(),
                    password: form.password,
                }),
            });

            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data?.message || "Signup failed");

            // e.g., redirect after success
            window.location.href = "/dashboard";
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-100">
            {/* Left: Brand/Info */}
            <section className="hidden lg:flex bg-gradient-to-br from-gray-900 to-[#04d2f0] text-white">
                <div className="m-auto max-w-md p-10 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">Create your account</h1>
                    <p className="mt-4 text-white/90">
                        Join to earn badges, track progress, and access members-only content.
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                        alt="Sign up illustration"
                        className="mx-auto mt-10 w-72 drop-shadow-xl"
                    />
                </div>
            </section>

            {/* Right: Form */}
            <section className="flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Sign Up</h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Already have an account?{" "}
                            <Link href="/auth/signin" className="text-[#04d2f0] hover:underline">
                                Sign in
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
                            <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                                Full name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Jane Doe"
                                value={form.name}
                                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            />
                        </div>

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
                                    type={showPw ? "text" : "password"}
                                    placeholder="Min 8 characters"
                                    value={form.password}
                                    onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-12 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPw((s) => !s)}
                                    className="absolute inset-y-0 right-3 my-auto text-sm text-gray-500 hover:text-gray-700"
                                    aria-label={showPw ? "Hide password" : "Show password"}
                                >
                                    {showPw ? "Hide" : "Show"}
                                </button>
                            </div>

                            {/* Strength bar */}
                            <div className="mt-2 h-1.5 rounded bg-gray-200">
                                <div
                                    className={`h-1.5 rounded ${[
                                        "w-0",
                                        "w-1/4 bg-red-500",
                                        "w-2/4 bg-yellow-500",
                                        "w-3/4 bg-lime-500",
                                        "w-full bg-green-600",
                                    ][strength]}`}
                                />
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                Use 8+ chars with a mix of upper, number, and symbol.
                            </p>
                        </div>

                        <div>
                            <label htmlFor="confirm" className="mb-1 block text-sm font-medium text-gray-700">
                                Confirm password
                            </label>
                            <div className="relative">
                                <input
                                    id="confirm"
                                    type={showPw2 ? "text" : "password"}
                                    placeholder="Re-enter password"
                                    value={form.confirm}
                                    onChange={(e) => setForm((f) => ({ ...f, confirm: e.target.value }))}
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-12 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPw2((s) => !s)}
                                    className="absolute inset-y-0 right-3 my-auto text-sm text-gray-500 hover:text-gray-700"
                                    aria-label={showPw2 ? "Hide password" : "Show password"}
                                >
                                    {showPw2 ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                <input
                                    type="checkbox"
                                    checked={form.accept}
                                    onChange={(e) => setForm((f) => ({ ...f, accept: e.target.checked }))}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                I agree to the{" "}
                                <Link href="/terms" className="text-[#04d2f0] hover:underline">
                                    Terms
                                </Link>{" "}
                                &{" "}
                                <Link href="/privacy" className="text-[#04d2f0] hover:underline">
                                    Privacy
                                </Link>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full rounded-lg bg-[#04d2f0] px-4 py-2.5 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60"
                        >
                            {isLoading ? "Creating account..." : "Create account"}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
