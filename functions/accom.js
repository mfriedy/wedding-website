
export async function onRequestPost(context) {
    const body = await context.request.formData();
    const { password_accom, who, flightin, arriveday, flightout, leaveday, accom } =
        Object.fromEntries(body);
    console.log('Form Data:', { password_accom, who, flightin, arriveday, flightout, leaveday, accom });

    if (context.env.rsvp_form_password === password_accom) {
        // Send email
        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${context.env.SENDGRID_API_KEY}`
            },
            body: JSON.stringify({
                personalizations: [
                    {
                        to: [
                            {
                                email: "wedding@shannon-and-matt.com",
                                name: "S&M Wedding"
                            }
                        ],
                        subject: "Wedding Travel Plans!"
                    }
                ],
                content: [
                    {
                        type: "text/plain",
                        value: JSON.stringify({ who, flightin, arriveday, flightout, leaveday, accom })
                    }
                ],
                from: {
                    email: "wedding@shannon-and-matt.com",
                    name: "S&M Wedding"
                },
                reply_to: {
                    email: "wedding@shannon-and-matt.com",
                    name: "S&M Wedding"
                }
            })
        });
        if (response.status == 200 | response.status == 202) {
            console.log('Email Sent:', response.statusText);
            const data = {
                success: true,
            };
            return Response.json(data);
        }
        else {
            console.error('Email Error:', response.statusText);
            const data = {
                success: false,
                reason: 'Email Error',
            };
            return Response.json(data);
        }

    } else {
        const data = {
            success: false,
            reason: 'Invalid Password'
        };
        return Response.json(data);
    }
}
