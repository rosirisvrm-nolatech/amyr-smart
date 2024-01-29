'use client';
import { Provider } from 'react-redux';
import { persistStore,  } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './store';

interface Props { 
    children: React.ReactNode
}

export function ReduxProvider({ children }: Props){
    
    const persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}