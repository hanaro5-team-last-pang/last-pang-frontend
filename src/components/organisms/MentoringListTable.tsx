'use client';

// TODO: ag-grid 표 컴포넌트 상태 관리 필요할 시 변경 필요
import MentoringListTableStatus from '@/components/organisms/MentoringListTableStatus';
import {
  ModuleRegistry,
  ColDef,
  ClientSideRowModelModule,
  RowClickedEvent,
} from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface MentoringListTableProps {
  height: string;
  width: string;
}

export default function MentoringListTable({
  width,
  height,
}: MentoringListTableProps) {
  const router = useRouter();
  ModuleRegistry.registerModules([ClientSideRowModelModule]);

  const rowData = [
    {
      id: 1,
      mentoringName: '양지은의 주식 투자 성공기',
      mentoringDate: '2025년 1월 10일',
      mentorName: '양지은',
      credit: '1000전',
      status: '멘토링 예약',
    },
    {
      id: 2,
      mentoringName: '정중일의 주식 투자 성공기',
      mentoringDate: '2025년 1월 16일',
      mentorName: '정중일',
      credit: '1500전',
      status: '멘토링 완료',
    },
  ];

  const colDefs: ColDef[] = [
    {
      field: 'mentoringName',
      headerName: '멘토링명',
    },
    { field: 'mentoringDate', headerName: '날짜' },
    { field: 'mentorName', headerName: '강사명' },
    { field: 'credit', headerName: '사용 크레딧' },
    {
      field: 'status',
      headerName: '상태',
      cellRenderer: MentoringListTableStatus,
    },
  ];

  const handleRowClick = useCallback(
    (event: RowClickedEvent) => {
      const rowId = event.data.id;
      router.push(`/mentorings/${rowId}`);
    },
    [router]
  );

  return (
    <div className="flex justify-center">
      <div className={`h-${height} w-${width}`}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          onRowClicked={handleRowClick}
        />
      </div>
    </div>
  );
}
