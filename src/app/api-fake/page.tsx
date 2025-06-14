import ApiFakePage from "../components/ApiFake"

export default function Page() {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className="text-4xl font-semibold mt-8 mb-6">API Fake</h1>
            <ApiFakePage />
        </div>
    )
}