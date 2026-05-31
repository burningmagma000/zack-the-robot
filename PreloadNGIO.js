let ngioReady = false;

setTimeout(function()
{
    let ngioInterval = setInterval(function()
    {
        // Wait for InitNGIO.js to finish setting globalThis.NGIO_API
        if (!globalThis.NGIO_API)
        {
            console.log("Waiting for NGIO_API...");
            return;
        }

        globalThis.NGIO_API.getConnectionStatus(function(status)
        {
            console.log("NGIO Status:", status);

            switch (status)
            {
                case globalThis.NGIO_API.STATUS_READY:
                    if (!ngioReady)
                    {
                        ngioReady = true;
                        clearInterval(ngioInterval);

                        globalThis.NGIO_API.unlockMedal(89935);
                        globalThis.NGIO_API.unlockMedal(90406);
                        globalThis.NGIO_API.unlockMedal(90407);
                        globalThis.NGIO_API.unlockMedal(90408);
                        console.log("Medals unlocked!");
                    }
                break;
            }
        });
    }, 16);
}, 500);