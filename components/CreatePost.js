"use client"

import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

const CreatePost = () => {
  const router = useRouter()

  const submit = async (evt) => {
    evt.preventDefault()
    const payload = {
      title: evt.target.elements.title.value,
      content: evt.target.elements.content.value,
      opinion: evt.target.elements.opinion.value,
      sources: evt.target.elements.sources.value,
    }
    const response = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    const ret = await response.json()
    if (ret.success) {
      toast.success(`Post submitted.`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
      })
      router.push("/dashboard")
    }
  }

  return (
    <div className="flex min-h-screen w-screen items-center md:justify-center lg:justify-center bg-[rgb(232,231,237)]">
      <div className="h-fit md:w-1/2 lg:w-1/2 w-full justify-center p-5 rounded-xl ml-5">
        <h1 className="text-center font-semibold text-purple-500">Compose</h1>
        <form className="flex flex-col" onSubmit={submit}>
          <label className="flex flex-col">
            <div>
              Title <span className="text-gray-400">(optional)</span>
            </div>
            <input
              placeholder="Title of post"
              name="title"
              type="text"
              maxLength={60}
              className="rounded shadow pl-2 h-10 focus:outline-purple-400"
            />
          </label>
          <label className="flex flex-col">
            Content
            <textarea
              placeholder="Quote, story, thought, etc..."
              name="content"
              maxLength={2500}
              required
              className="p-2 h-40 rounded-xl shadow focus:outline-purple-400"
            />
          </label>
          <label className="flex flex-col">
            <div>
              Opinion <span className="text-gray-400">(optional)</span>
            </div>
            <textarea
              placeholder="What are your thoughts on the content above?"
              name="opinion"
              maxLength={2500}
              className="h-40 p-2 rounded-xl shadow focus:outline-purple-400"
            />
          </label>
          <label className="flex flex-col">
            <div>
              Source <span className="text-gray-400">(optional)</span>
            </div>
            <textarea
              placeholder="References, if available."
              name="sources"
              maxLength={70}
              className="h-20 p-2 rounded-xl shadow focus:outline-purple-400"
            />
          </label>
          <button className="btn-primary w-40 p-2 rounded-full mx-auto mt-5 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
