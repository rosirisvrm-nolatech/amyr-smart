import { useAppSelector } from '@/app/redux/hooks';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

type Props = {
    children: React.ReactNode;
}

const PrivateRoute = ({ children }: Props) => {

    const userAuth = useAppSelector(state => state.auth.user);
    const router = useRouter();
    const pathname = usePathname();

    if(!userAuth && pathname !== '/login'){
        // localStorage.setItem('previousPath', pathname);
        // console.log('redireccionar a login');
        router.push('/login');
    }

    return children;
}

export { PrivateRoute }