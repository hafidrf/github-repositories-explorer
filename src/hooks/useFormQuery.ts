import { useState } from "react";

export const useFormQuery = (): FormQueryHook => {
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget as HTMLFormElement;
    const { inputQuery } = Object.fromEntries(new FormData(target));

    if (inputQuery.toString().trim().length === 0) return;

    setQuery(inputQuery.toString());
    target.focus();
  };

  const handleLoading = (loading: boolean) => setIsLoading(loading);

  return {
    query,
    isLoading,
    handleSubmit,
    handleLoading,
  };
};
