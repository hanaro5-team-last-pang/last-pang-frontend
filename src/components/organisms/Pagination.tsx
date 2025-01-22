import Button from '@/components/atoms/Button';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  buttonColor: string;
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  buttonColor,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <Button
        text="<"
        type="button"
        onClick={handlePreviousPage}
        disabled={currentPage === 0}
        className="border border-gray-300 text-gray-700 font-extrabold rounded-full px-4 mr-2"
      />

      {/* 페이지 번호 */}
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          type="button"
          onClick={() => onPageChange(index)}
          className={`mx-1 px-4 py-2 rounded-full ${
            currentPage === index
              ? `${buttonColor} text-white`
              : 'border border-gray-300 text-gray-700'
          }`}
        >
          {index + 1}
        </Button>
      ))}

      <Button
        text=">"
        type="button"
        onClick={handleNextPage}
        disabled={currentPage >= totalPages - 1}
        className="border border-gray-300 text-gray-700 font-extrabold rounded-full px-4 ml-2"
      />
    </div>
  );
}
