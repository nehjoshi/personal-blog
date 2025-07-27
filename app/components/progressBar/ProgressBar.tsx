'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import 'nprogress/nprogress.css'; // default styles
import '../../styles/nprogress.css';
import NProgress from 'nprogress'


NProgress.configure({ showSpinner: false });

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();

    const timeout = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname, searchParams]);

  return null;
}
