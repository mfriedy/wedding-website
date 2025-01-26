export async function onRequestPost(context) {
    const body = await context.request.formData();

    const { unlock_pw } =
        Object.fromEntries(body);
    if (context.env.rsvp_form_password === unlock_pw) {
        return new Response("SUCCESS - UNLOCKED");
    } else {
        return new Response("FAIL :(");
    }
}
