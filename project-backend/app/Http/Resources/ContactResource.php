<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    // public $preserveKeys = true;

    public function toArray($request)
    {
        // return [
        //     'id'            => $this->id,
        //     'name'          => $this->name,
        //     'email'         => $this->email,
        //     'phone'         => $this->phone,
        //     'designation'   => $this->designation,
        //     'created_at'    => $this->created_at,
        //     'updated_at'    => $this->updated_at
        // ];

        return parent::toArray($request);
    }
}
