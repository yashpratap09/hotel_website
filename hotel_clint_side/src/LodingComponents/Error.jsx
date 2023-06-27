import React from 'react';

function Error({message}) {
  return (
    <div>
      <div class="alert alert-danger" role="alert">
        {message}
 {/* Something went wrong please try again later */}
</div>
    </div>
  );
}

export default Error;
