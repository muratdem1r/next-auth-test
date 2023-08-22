interface ParamTypes {
    params: { communityId: Number, communityName: string }
}

export async function generateMetadata({ params }: ParamTypes) {
    return {
        title: params.communityName
    }
}

export default function Page({params} : ParamTypes) {
    return (
        <>
            <div>Community ID:  {params.communityId.toString()}</div>
            <div>Community Name: {params.communityName}</div>
        </>
    );
}


