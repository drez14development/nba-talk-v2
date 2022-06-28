import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";

const NewPost = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    data = { ...data,
     created_at: new Date().toLocaleString("en-US", {timeZone: "America/Argentina/Buenos_Aires"}),
     post_slug: data.heading.replace(/[^A-Za-z0-9\s]/g,'').replace(/\s+/g, '-').toLowerCase()
    }
    
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container container pt-4">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <h1>Create Post</h1>
          <div>
            {isSubmitting ? (
              <p>Loading...</p>
            ) : (
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {errors.heading && <span className="text-danger">This field is required</span>}
                <input className="mb-3 form-control" placeholder="Heading" {...register("heading", {required: true})}/>

                {errors.description && <span className="text-danger">This field is required</span>}
                <textarea className="mb-3 form-control" placeholder="Description" {...register("description", {required: true})} />

                {errors.imgUrl && <span className="text-danger">This field is required</span>}
                <input className="mb-3 form-control" placeholder="Image URL" {...register("imgUrl", {required: true})} />

                {errors.content && <span className="text-danger">This field is required</span>}
                <textarea className="mb-3 form-control" placeholder="Content" {...register("content", {required: true})} />

                <button className="btn btn-primary" type="submit">Create</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
