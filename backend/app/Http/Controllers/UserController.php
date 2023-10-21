<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserStoreRequest;
use Illuminate\Support\Facades\Validator;
 
class UserController extends Controller
{
    public function index()
    {
       $users = User::all(); 
          
       return response()->json([
            'results' => $users
       ],200);
    }
   
    public function store(UserStoreRequest $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'username' => 'required|unique:users',
            'email' => 'required|email|unique:users', 
            'password' => 'required|min:6',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 400);
        }
    
        try {
            User::create([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => $request->password
            ]);
    
            return response()->json([
                'message' => 'User successfully created.'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Something went really wrong!'
            ], 500);
        }
    }
   
    public function show($id)
    {
       $users = User::find($id);
       if(!$users){
         return response()->json([
            'message'=>'User Not Found.'
         ],404);
       }
       
       
       return response()->json([
          'users' => $users
       ],200);
    }
   
    public function update(UserStoreRequest $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'username' => 'required|unique:users,username,'.$id,
            'email' => 'required|email|unique:users,email,'.$id, 
            'password' => 'required|min:6',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 400);
        }
    
        try {
            $user = User::find($id);
            if (!$user) {
                return response()->json([
                    'message' => 'User Not Found.'
                ], 404);
            }
    
            $user->name = $request->name;
            $user->username = $request->username;
            $user->email = $request->email;
            $user->password = $request->password;
    
            $user->save();
    
            return response()->json([
                'message' => 'User successfully updated.'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Something went really wrong!'
            ], 500);
        }
    }
   
    public function destroy($id)
    {
         
        $users = User::find($id);
        if(!$users){
          return response()->json([
             'message'=>'User Not Found.'
          ],404);
        }
         
       
        $users->delete();
       
        
        return response()->json([
            'message' => "User successfully deleted."
        ],200);
    }
}