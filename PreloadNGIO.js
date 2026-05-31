globalThis.NGIO_API.getConnectionStatus(function(status)
{
    switch (status)
    {
        case globalThis.NGIO_API.STATUS_READY:

            globalThis.NGIO_API.getMedal(89935);
            globalThis.NGIO_API.getMedal(90406);
            globalThis.NGIO_API.getMedal(90407);
            globalThis.NGIO_API.getMedal(90408);
            console.log("Medals got!");
        break;
    }
});