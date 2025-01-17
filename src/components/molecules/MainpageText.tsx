import LinkButton from '@/components/atoms/LinkButton';

interface MainpageTextProps {
  title: string;
  description: string;
  buttonRoute: string;
}
export default function MainpageText({
  title,
  description,
  buttonRoute,
}: MainpageTextProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
      </div>
      <div>
        <LinkButton
          label={'전체보기'}
          route={buttonRoute}
          className={'border border-gray-200 rounded-full text-sm'}
        />
      </div>
    </div>
  );
}
