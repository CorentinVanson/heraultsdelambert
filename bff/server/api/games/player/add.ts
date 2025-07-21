export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        return addPlayer({ id:body.id, pseudo:body.pseudo, mail:body.mail, phone:body.phone });
    } catch (error) {
        return error;
    }
})