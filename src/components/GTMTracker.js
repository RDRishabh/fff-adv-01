"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as gtm from "@/lib/gtm";

function GTMTrackerComponent() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const engagedTracked = useRef(false);

    // Track PageView on route change
    useEffect(() => {
        if (pathname) {
            gtm.pageview(pathname);
        }
    }, [pathname, searchParams]);

    // Track Engaged_60s
    useEffect(() => {
        if (engagedTracked.current) return;

        let engagedTimer = setTimeout(() => {
            gtm.event({
                action: "Engaged_60s",
                category: "Engagement",
                label: "Time on Page",
                value: 60,
            });
            engagedTracked.current = true;
        }, 60000); // 60 seconds

        return () => clearTimeout(engagedTimer);
    }, []);

    return null;
}

export default function GTMTracker() {
    return (
        <Suspense fallback={null}>
            <GTMTrackerComponent />
        </Suspense>
    );
}
