interface IntroductionProps {
  modifyMode: boolean;
  introduction: string;
  newIntroduction: string;
  setNewIntroduction: (newIntroduction: string) => void;
}

export default function MyCardIntroductionForm({
  modifyMode,
  introduction,
  newIntroduction,
  setNewIntroduction,
}: IntroductionProps) {
  return (
    <div className="rounded-lg bg-gray-100 px-8 py-5">
      <div className="text-xl font-semibold">소개</div>
      {!modifyMode ? (
        <textarea
          className="text-md my-3 text-gray-400 w-full bg-inherit focus:outline-none resize-none"
          value={introduction}
          readOnly
        />
      ) : (
        <textarea
          className="text-md bg-inherit text-gray-400 my-3 w-full"
          value={newIntroduction}
          onChange={(e) => setNewIntroduction(e.target.value)}
        />
      )}
    </div>
  );
}
