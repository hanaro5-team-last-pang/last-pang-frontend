import Button from '@/components/atoms/Button';
import FAQList from '@/components/organisms/FAQList';
import { faqData } from '@/utils/dummy';

export default function MentoringFAQForm() {
  return (
    <div className="p-10 w-full">
      <h2 className="text-2xl font-bold mb-4">전체 FAQs</h2>
      <h1 className="mb-4"> 자주 묻는 질문 </h1>
      <div className="px-5"></div>
      <FAQList faqs={faqData} />
      <div>
        <h3 className="text-lg font-semibold mb-4">질문 작성하기</h3>
        <div className="mb-2">
          답변이 등록되면 입력하신 이메일로 알려드립니다.
        </div>
        <form>
          <div className="mb-2">
            <textarea
              placeholder="질문을 입력하세요"
              className="border border-gray-300 rounded-md w-full p-2"
              rows={3}
            />
          </div>
          <Button
            text="질문 등록하기"
            type="submit"
            className="bg-ourOrange text-white rounded-full px-4 py-2"
          />
        </form>
      </div>
    </div>
  );
}
