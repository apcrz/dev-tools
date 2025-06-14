import GenerateLoremIpsum from '../components/GenerateLoremIpsum';

export default function Page() {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-4xl font-bold'>Gerador de Lorem Ipsum</h1>
            <GenerateLoremIpsum />
        </div>
    );
}