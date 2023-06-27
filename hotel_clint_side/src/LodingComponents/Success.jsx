import React from 'react';

function Success({message}) {
  return (
    <div>
        <div class="alert alert-success" role="alert">
  {/* This is a success alert—check it out! */}
  {message}
</div>
      
    </div>
  );
}

export default Success;
