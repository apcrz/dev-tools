import { NextResponse } from "next/server";

export async function PUT() {
    return new NextResponse(null, { status: 204 });
}

export async function DELETE() {
    return new NextResponse(null, { status: 204 });
}

