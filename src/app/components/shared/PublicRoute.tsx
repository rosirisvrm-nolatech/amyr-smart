import { useAppSelector } from '@/app/redux/hooks';
import { useRouter } from 'next/navigation';

type Props = {
    children: React.ReactNode;
}

const PublicRoute = ({ children }: Props) => {

    const userAuth = useAppSelector(state => state.auth.user);
    const router = useRouter();

    if(userAuth){
        router.push('/');
    }

    return children;
}

export { PublicRoute }