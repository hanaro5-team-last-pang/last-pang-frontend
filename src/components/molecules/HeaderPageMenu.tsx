'use client';

import { PageUtils } from '@/utils/PageUtils';
import { usePathname } from 'next/navigation';

export default function HeaderPageMenu() {
  const currentLocation = usePathname();
  const currentPageMenu = PageUtils.findCurrentLocation(currentLocation);
  return (
    <div>
      {currentLocation !== '/' &&
        currentLocation !== '/login' &&
        currentLocation !== '/signup' && (
          <div className="bg-gray-100">
            <div className="wrapper header-menu-skeleton">
              <div className="py-2 text-gray-600 text-sm font-light">
                {currentPageMenu}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
