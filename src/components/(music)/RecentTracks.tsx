import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const RecentTracks: React.FC = () => {
    const [recentTracks, setRecentTracks] = useState<any>([]);
    const LASTFM_KEY = process.env.LASTFM_KEY;

    useEffect(() => {
        axios
            .get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=pranshu05&api_key=${LASTFM_KEY}&format=json`)
            .then((res) => setRecentTracks(res.data.recenttracks.track));
    }, [LASTFM_KEY]);

    if (!recentTracks.length) return <div>No recent Tracks</div>;

    return (
        <div className="my-4">
            <h1 className="text-2xl font-bold mb-2">Recent Tracks</h1>
            <p>Recently heard songs.</p>
            <div className="grid grid-flow-col gap-2 overflow-x-auto my-2">
                {recentTracks.map((track: any, index: number) => (
                    <a key={index} href={track.url} target="_blank" className="relative w-[100px] h-[100px] overflow-hidden group">
                        <Image className="rounded-md" src={track.image[3]['#text']} alt="" width={100} height={100} />
                        <div className="absolute top-0 left-0 right-0 p-2 overflow-y-auto rounded-md w-full h-full max-h-full scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 bg-black bg-opacity-40 backdrop backdrop-blur-sm">
                            <p className="text-md font-bold">{track.name}</p>
                            <p className="text-sm">{track.artist['#text']}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default RecentTracks;