let ngioReady = false;
setTimeout(function()
{
    let ngioInterval = setInterval(function()
    {
        if (!globalThis.NGIO_API)
        {
            return;
        }
        globalThis.NGIO_API.getConnectionStatus(function(status)
        {
            switch (status)
            {
                case globalThis.NGIO_API.STATUS_READY:
                    if (!ngioReady)
                    {
                        ngioReady = true;
                        globalThis.NGIO_API.getMedal(89935);
                        globalThis.NGIO_API.getMedal(90406);
                        globalThis.NGIO_API.getMedal(90407);
                        globalThis.NGIO_API.getMedal(90408);
                        if (globalThis.NGIO_API.hasUser)
                        {
                            const medal = globalThis.NGIO_API.getMedal(89935);
                            if (medal && !medal.unlocked)
                            {
                                globalThis.NGIO_API.unlockMedal(89935);
                            }
                        }
                        setInterval(function()
						{
							if (globalThis.NGIO_API.hasUser)
							{
								globalThis.NGIO_API.getConnectionStatus(function(status) {});
								globalThis.NGIO_API.keepSessionAlive();
							}
						}, 1000);
                    }
                break;
            }
        });
    }, 16);
}, 500);