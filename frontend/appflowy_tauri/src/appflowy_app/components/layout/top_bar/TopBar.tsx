import React from 'react';
import CollapseMenuButton from '$app/components/layout/collapse_menu_button/CollapseMenuButton';
import { useAppSelector } from '$app/stores/store';
import Breadcrumb from '$app/components/layout/bread_crumb/BreadCrumb';
import ShareButton from '$app/components/layout/share/Share';
import MoreButton from '$app/components/layout/top_bar/MoreButton';

function TopBar() {
  const sidebarIsCollapsed = useAppSelector((state) => state.sidebar.isCollapsed);

  return (
    <div className={'flex h-[64px] select-none border-b border-line-divider p-4'}>
      {sidebarIsCollapsed && (
        <div className={'mr-2 py-1'}>
          <CollapseMenuButton />
        </div>
      )}
      <div className={'flex flex-1 items-center justify-between'}>
        <div className={'flex-1'}>
          <Breadcrumb />
        </div>
        <div className={'flex items-center justify-end'}>
          <div className={'mr-2'}>
            <ShareButton />
          </div>

          <MoreButton />
        </div>
      </div>
    </div>
  );
}

export default TopBar;