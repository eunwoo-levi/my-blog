import { useRouter } from 'next/navigation';

export const handleTransition = async (href:string, router:ReturnType<typeof useRouter>) => {
    const body = document.querySelector('body');
    body?.classList.add('page-transition');


    const pageTransition = router.push(href);

        // 페이지 전환과 최소 애니메이션 시간을 모두 기다림
        await Promise.all([
            pageTransition,
            sleep(400)
        ]);

    body?.classList.remove('page-transition');
};

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}