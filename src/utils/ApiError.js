class ApiError extends Error{
    constructor(
        statusCode,
        message="Someting went wrong",
        error=[],
        statck=""
    ) {
        super(message);
        this.statusCode = statusCode;
       this.data=null
       this.message=message
       this.success=false;
       thiss.errors=errors

       if(statck){
        this.stack=statck

       }else{
        Error.captureStackTrace(this,this.
            constructor
        )
       }
    }
}

export {ApiError}
