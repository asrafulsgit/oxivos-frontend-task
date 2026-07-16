"use client";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider store={store}>
      <div className="flex min-h-svh flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <ToastContainer />
    </ReduxProvider>
  );
}
