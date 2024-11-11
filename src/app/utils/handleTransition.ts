import { useRouter } from 'next/navigation';

export const handleTransition = async (href:string, router:ReturnType<typeof useRouter>) => {
    const body = document.querySelector('body');

    body?.classList.add('page-transition');

    await sleep(200);

    router.push(href);

    await sleep(200);

    body?.classList.remove('page-transition');
};

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}