import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
} from "react";

interface Props {
  children: ReactNode;
}

const PaginationContext = createContext<PaginationHook | null>(null);

const PaginationProvider: FC<Props> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    e.preventDefault();
    setCurrentPage(value);
  };

  const resetPage = () => {
    setCurrentPage(1);
    console.log("hello");
  };

  const value = {
    currentPage,
    handlePageChange,
    resetPage,
  };

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};

const usePagination = () => {
  const context = useContext(PaginationContext);
  if (context === undefined) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context as PaginationHook;
};

export { PaginationProvider, usePagination };
