
interface IDataRepository {
    postLogin(email : string,password :string): Promise<{status :number; message : string}>;
  }
export class ApiRepository implements IDataRepository {
  postLogin(email:string,password :string): Promise<{ status: number; message: string; }> {
      return new Promise((resolve,reject)=> {
        if(email === "admin@admin.com" && password === "password") {
            setTimeout(()=>{
               resolve({message : "Success",status : 200})
            },1500)
        }
        else {
            setTimeout(()=>{
                reject({message : "Email and Password Combination do not match our record",status : 404})
             },1500)
        }
      })
  }
}