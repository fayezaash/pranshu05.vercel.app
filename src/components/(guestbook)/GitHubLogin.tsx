import { auth, signInWithPopup, GithubAuthProvider } from '../../firebase/firebase';
import { FaGithub } from 'react-icons/fa';

interface GitHubLoginProps {
    setErrorMsg: React.Dispatch<React.SetStateAction<string | null>>;
}

const GitHubLogin: React.FC<GitHubLoginProps> = ({ setErrorMsg }) => (
    <button onClick={async () => {
        try {
            await signInWithPopup(auth, new GithubAuthProvider());
        } catch (error: any) {
            setErrorMsg(error.code === 'auth/account-exists-with-different-credential' ? 'Account exists with different credentials' : error.message);
        }
    }} className='py-2 px-4 rounded-lg bg-zinc-900 flex gap-2 items-center'>
        <FaGithub /> Sign in
    </button>
);

export default GitHubLogin;