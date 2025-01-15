'use client';

import { PageUtils } from '@/utils/PageUtils';
import { usePathname } from 'next/navigation';

export default function HeaderPageMenu() {
  const currentLocation = usePathname();
  const currentPageMenu = PageUtils.findCurrentLocation(currentLocation);
  return (
    <div className="w-full bg-gray-200">
      {currentLocation !== '/' &&
        currentLocation !== '/login' &&
        currentLocation !== '/signup' && (
          <div className="sm:px-20 px-8 py-2 text-gray-600">
            {currentPageMenu}
          </div>
        )}
    </div>
  );
}
