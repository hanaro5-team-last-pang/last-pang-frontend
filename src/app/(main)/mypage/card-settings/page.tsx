'use client';

import Button from '@/components/atoms/Button';
import MyCardCareerForm from '@/components/template/MyCardCareerForm';
import MyCardIntroductionForm from '@/components/template/MyCardIntroductionForm';
import MyCardProfileForm from '@/components/template/MyCardProfileForm';
import { RiPencilFill } from 'react-icons/ri';
import { useState } from 'react';

export default function Page() {
  const loginUser = '정중일';
  const userImage = 'https://placehold.co/25x25';
  const [modifyMode, setModifyMode] = useState(false);
  const [oneLineIntroduction, setOneLineIntroduction] =
    useState('한 줄 소개를 입력하세요');
  const [newOneLineIntroduction, setNewOneLineIntroduction] =
    useState<string>('한 줄 소개를 입력하세요');
  const [introduction, setIntroduction] =
    useState('자신의 소개에 대해 입력하세요');
  const [newIntroduction, setNewIntroduction] =
    useState<string>('자신의 소개에 대해 입력하세요');
  const [career, setCareer] = useState('자신의 이력에 대해 입력하세요');
  const [newCareer, setNewCareer] = useState('자신의 이력에 대해 입력하세요');

  const handleModifyMode = () => {
    setModifyMode(true);
  };

  const handleSubmitNewData = () => {
    if (newOneLineIntroduction && newIntroduction && newCareer) {
      setOneLineIntroduction(newOneLineIntroduction);
      setIntroduction(newIntroduction);
      setCareer(newCareer);
    }
    setModifyMode(false);
  };

  const handleCancelNewData = () => {
    setNewOneLineIntroduction(oneLineIntroduction);
    setNewIntroduction(introduction);
    setNewCareer(career);
    setModifyMode(false);
  };

  return (
    <div className="px-4 relative">
      {!modifyMode ? (
        <button
          type="button"
          className="absolute right-0 mx-9 text-ourGreen text-sm"
          onClick={handleModifyMode}
        >
          <RiPencilFill className="text-lg" />
        </button>
      ) : (
        <div className="absolute right-0 flex mx-9 gap-2">
          <Button type="button" text="취소" onClick={handleCancelNewData} />
          <Button type="button" text="제출" onClick={handleSubmitNewData} />
        </div>
      )}
      <div className="text-center text-3xl text-bold text-ourGreen">
        {loginUser} 멘토
      </div>
      <div className="my-10 mx-5 flex justify-center items-center">
        <div className="text-3xl text-ourGreen">"</div>
        {modifyMode ? (
          <input
            className="text-xl w-full px-2 text-center align-middle"
            value={newOneLineIntroduction}
            onChange={(e) => setNewOneLineIntroduction(e.target.value)}
          />
        ) : (
          <div className="text-xl w-full px-2 text-center">
            {oneLineIntroduction}
          </div>
        )}
        <div className="text-3xl text-ourGreen">"</div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center">
          <MyCardProfileForm userImage={userImage} />
        </div>
        <MyCardIntroductionForm
          modifyMode={modifyMode}
          introduction={introduction}
          newIntroduction={newIntroduction}
          setNewIntroduction={setNewIntroduction}
        />
      </div>
      <MyCardCareerForm
        modifyMode={modifyMode}
        career={career}
        newCareer={newCareer}
        setNewCareer={setNewCareer}
      />
    </div>
  );
}
