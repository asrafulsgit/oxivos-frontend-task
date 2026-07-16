"use client";
import { useEffect, useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  return loading;
};

export default useLoading;
