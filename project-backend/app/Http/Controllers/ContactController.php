<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactStoreRequest;
use App\Http\Resources\ContactCollection;
use App\Http\Resources\ContactResource;
use App\Models\Contact;

class ContactController extends Controller
{
    public function index() {
        return new ContactCollection(Contact::get());
    }

    public function store(ContactStoreRequest $request)
    {
        $contact = Contact::create([
            'name'        => $request->input('name'),
            'email'       => $request->input('email'),
            'phone'       => $request->input('phone'),
            'designation' => $request->input('designation')
        ]);

        return response()->json([
            'data' => $contact,
            'message' => 'Contact created successfully'
        ]);
    }
}
