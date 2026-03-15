export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        return addFood(body);
    } catch (error) {
        return error;
    }
})