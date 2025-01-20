import CheckboxList from '@/components/molecules/CheckboxList';
import CardView from '@/components/organisms/CardView';
import MentoringList from '@/components/organisms/MentoringList';
import SearchBar from '@/components/template/SearchBar';
import { age_category, cardData, category } from '@/utils/dummy';

export default function Page() {
  return (
    <>
      <div className="wrapper flex w-full my-10 gap-10 items-start">
        <div className="w-5/6">
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between mb-6 w-full">
              <h1 className="text-2xl font-bold">전체 멘토링 강의</h1>
              <SearchBar />
            </div>
            <div className="grid grid-rows-6 gap-6 gap-y-8 mt-4">
              {cardData.map((card) => (
                // 화면 크기에 따라 조건부 렌더링
                <div key={card.id} className="sm:hidden">
                  <CardView {...card} id={`/mentorings/${card.id}`} />
                </div>
              ))}
              {cardData.map((card) => (
                <div key={card.id} className="hidden sm:block">
                  <MentoringList {...card} id={`/mentorings/${card.id}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/6">
          <div className="w-full">
            <div className="mb-8">
              <div className="text-sm mb-3 font-semibold"> 멘토링 카테고리</div>
              <CheckboxList items={category} />
            </div>
            <div>
              <div className="text-sm mb-3 font-semibold"> 연령 카테고리</div>
              <CheckboxList items={age_category} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
