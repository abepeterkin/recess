import React, { useState } from 'react';

export const RecessContext = React.createContext();
const initialServers = [
    {
        name: 'oathkeeper',
        port: '50051',
    },
    {
        name: 'longclaw',
        port: '50051',
    },
];

export function RecessContextManager({ children }) {
    const [servers, setServers] = useState(initialServers);
    const [selectedServer, selectServer] = useState(initialServers[0]);
    return (
        <RecessContext.Provider
            value={{
                servers,
                selectedServer,
                selectServer,
                addServer: ({ name, port }) =>
                    setServers(currentServers => [...currentServers, { name, port }]),
                deleteServer: serverToDelete =>
                    setServers(currentServers => {
                        return currentServers.filter(
                            ({ name, port }) =>
                                !(name === serverToDelete.name && port === serverToDelete.port)
                        );
                    }),
            }}
        >
            {children}
        </RecessContext.Provider>
    );
}
