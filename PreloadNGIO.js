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
                        clearInterval(ngioInterval);

                        globalThis.NGIO_API.getMedal(89935);
                        globalThis.NGIO_API.getMedal(90406);
                        globalThis.NGIO_API.getMedal(90407);
                        globalThis.NGIO_API.getMedal(90408);
                    }
                break;
            }
        });
    }, 16);
}, 500);