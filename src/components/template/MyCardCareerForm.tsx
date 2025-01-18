interface MyCardCareerProps {
  modifyMode: boolean;
  career: string;
  newCareer: string;
  setNewCareer: (newCareer: string) => void;
}

export default function MyCardCareerForm({
  modifyMode,
  career,
  newCareer,
  setNewCareer,
}: MyCardCareerProps) {
  return (
    <div className="my-3 bg-gray-100 rounded-lg px-8 py-5">
      <div className="text-xl font-semibold">이력</div>
      {!modifyMode ? (
        <textarea
          className="text-md my-3 text-gray-400 w-full bg-inherit focus:outline-none resize-none"
          value={career}
          readOnly
        />
      ) : (
        <textarea
          className="text-md bg-inherit text-gray-400 my-3 w-full"
          value={newCareer}
          onChange={(e) => setNewCareer(e.target.value)}
        />
      )}
    </div>
  );
}
