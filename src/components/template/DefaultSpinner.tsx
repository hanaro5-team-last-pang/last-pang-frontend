import { SyncLoader } from 'react-spinners';

interface Props {
  size?: number;
  color?: string;
}

export default function DefaultSpinner(props: Props) {
  const { size = 15, color = '#0B9B97' } = props;
  return (
    <div className={`w-full py-20 h-full flex justify-center`}>
      <div>
        <SyncLoader size={size} color={color} />
      </div>
    </div>
  );
}
