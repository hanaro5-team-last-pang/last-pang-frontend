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

export default function MentoringListTable() {
  const router = useRouter();
  ModuleRegistry.registerModules([ClientSideRowModelModule]);

  const rowData = [
    {
      id: 1,
      mentoringName: '양지은의 주식 투자 성공기',
      mentoringDate: '2025년 1월 10일',
      mentorName: '양지은',
      status: '멘토링 예약',
    },
    {
      id: 2,
      mentoringName: '정중일의 주식 투자 성공기',
      mentoringDate: '2025년 1월 16일',
      mentorName: '정중일',
      status: '멘토링 완료',
    },
  ];

  const colDefs: ColDef[] = [
    {
      field: 'mentoringName',
      headerName: '멘토링명',
      width: 250, // 기본 너비 설정 (px 단위)
      minWidth: 210,
    },
    {
      field: 'mentoringDate',
      headerName: '날짜',
      width: 160, // 기본 너비 설정
      minWidth: 140,
    },
    {
      field: 'mentorName',
      headerName: '강사명',
      width: 100,
      minWidth: 70, // 최소 너비 설정
    },
    {
      field: 'status',
      headerName: '상태',
      width: 120,
      minWidth: 110,
      cellRenderer: MentoringListTableStatus,
    },
    {
      field: 'review',
      headerName: '리뷰',
      width: 100,
      minWidth: 110,
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
    <div
      className={`min-h-[135px] max-h-[500px] w-full overflow-y-auto scrollbar-hide`}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        onRowClicked={handleRowClick}
      />
    </div>
  );
}
