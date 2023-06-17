// This file generated by "generate.ts ffi" in the root of the repo.
import { QuickJSAsyncEmscriptenModule } from "../emscripten-types"
import { JSRuntimePointer, JSContextPointer, JSContextPointerPointer, JSModuleDefPointer, JSValuePointer, JSValueConstPointer, JSValuePointerPointer, JSValueConstPointerPointer, QTS_C_To_HostCallbackFuncPointer, QTS_C_To_HostInterruptFuncPointer, QTS_C_To_HostLoadModuleFuncPointer, BorrowedHeapCharPointer, OwnedHeapCharPointer, JSBorrowedCharPointer, JSVoidPointer, EvalFlags, EvalDetectModule, assertSync } from "../types-ffi"

/**
 * Low-level FFI bindings to QuickJS's Emscripten module.
 * See instead [[QuickJSContext]], the public Javascript interface exposed by this
 * library.
 *
 * @unstable The FFI interface is considered private and may change.
 */
export class QuickJSAsyncFFI {
  constructor(private module: QuickJSAsyncEmscriptenModule) {}
  /** Set at compile time. */
  readonly DEBUG = true

  QTS_Throw: (ctx: JSContextPointer, error: JSValuePointer | JSValueConstPointer) => JSValuePointer =
    this.module.cwrap("QTS_Throw", "number", ["number","number"])

  QTS_NewError: (ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewError", "number", ["number"])

  QTS_RuntimeSetMemoryLimit: (rt: JSRuntimePointer, limit: number) => void =
    this.module.cwrap("QTS_RuntimeSetMemoryLimit", null, ["number","number"])

  QTS_RuntimeComputeMemoryUsage: (rt: JSRuntimePointer, ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_RuntimeComputeMemoryUsage", "number", ["number","number"])

  QTS_RuntimeDumpMemoryUsage: (rt: JSRuntimePointer) => OwnedHeapCharPointer =
    this.module.cwrap("QTS_RuntimeDumpMemoryUsage", "number", ["number"])

  QTS_RecoverableLeakCheck: () => number =
    this.module.cwrap("QTS_RecoverableLeakCheck", "number", [])

  QTS_BuildIsSanitizeLeak: () => number =
    this.module.cwrap("QTS_BuildIsSanitizeLeak", "number", [])

  QTS_RuntimeSetMaxStackSize: (rt: JSRuntimePointer, stack_size: number) => void =
    this.module.cwrap("QTS_RuntimeSetMaxStackSize", null, ["number","number"])

  QTS_AddIntrinsicBaseObjects: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicBaseObjects", null, ["number"])

  QTS_AddIntrinsicDate: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicDate", null, ["number"])

  QTS_AddIntrinsicEval: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicEval", null, ["number"])

  QTS_AddIntrinsicStringNormalize: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicStringNormalize", null, ["number"])

  QTS_AddIntrinsicRegExpCompiler: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicRegExpCompiler", null, ["number"])

  QTS_AddIntrinsicRegExp: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicRegExp", null, ["number"])

  QTS_AddIntrinsicJSON: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicJSON", null, ["number"])

  QTS_AddIntrinsicProxy: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicProxy", null, ["number"])

  QTS_AddIntrinsicMapSet: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicMapSet", null, ["number"])

  QTS_AddIntrinsicTypedArrays: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicTypedArrays", null, ["number"])

  QTS_AddIntrinsicPromise: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicPromise", null, ["number"])

  QTS_AddIntrinsicBigInt: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicBigInt", null, ["number"])

  QTS_AddIntrinsicBigFloat: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicBigFloat", null, ["number"])

  QTS_AddIntrinsicBigDecimal: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicBigDecimal", null, ["number"])

  QTS_AddIntrinsicOperators: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_AddIntrinsicOperators", null, ["number"])

  QTS_EnableBignumExt: (ctx: JSContextPointer, enable: boolean) => void =
    this.module.cwrap("QTS_EnableBignumExt", null, ["number","boolean"])

  QTS_GetUndefined: () => JSValueConstPointer =
    this.module.cwrap("QTS_GetUndefined", "number", [])

  QTS_GetNull: () => JSValueConstPointer =
    this.module.cwrap("QTS_GetNull", "number", [])

  QTS_GetFalse: () => JSValueConstPointer =
    this.module.cwrap("QTS_GetFalse", "number", [])

  QTS_GetTrue: () => JSValueConstPointer =
    this.module.cwrap("QTS_GetTrue", "number", [])

  QTS_NewRuntime: () => JSRuntimePointer =
    this.module.cwrap("QTS_NewRuntime", "number", [])

  QTS_FreeRuntime: (rt: JSRuntimePointer) => void =
    this.module.cwrap("QTS_FreeRuntime", null, ["number"])

  QTS_NewContext: (rt: JSRuntimePointer) => JSContextPointer =
    this.module.cwrap("QTS_NewContext", "number", ["number"])

  QTS_NewContextRaw: (rt: JSRuntimePointer) => JSContextPointer =
    this.module.cwrap("QTS_NewContextRaw", "number", ["number"])

  QTS_FreeContext: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_FreeContext", null, ["number"])

  QTS_FreeValuePointer: (ctx: JSContextPointer, value: JSValuePointer) => void =
    this.module.cwrap("QTS_FreeValuePointer", null, ["number","number"])

  QTS_FreeValuePointerRuntime: (rt: JSRuntimePointer, value: JSValuePointer) => void =
    this.module.cwrap("QTS_FreeValuePointerRuntime", null, ["number","number"])

  QTS_FreeVoidPointer: (ctx: JSContextPointer, ptr: JSVoidPointer) => void =
    this.module.cwrap("QTS_FreeVoidPointer", null, ["number","number"])

  QTS_FreeCString: (ctx: JSContextPointer, str: JSBorrowedCharPointer) => void =
    this.module.cwrap("QTS_FreeCString", null, ["number","number"])

  QTS_DupValuePointer: (ctx: JSContextPointer, val: JSValuePointer | JSValueConstPointer) => JSValuePointer =
    this.module.cwrap("QTS_DupValuePointer", "number", ["number","number"])

  QTS_NewObject: (ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewObject", "number", ["number"])

  QTS_NewObjectProto: (ctx: JSContextPointer, proto: JSValuePointer | JSValueConstPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewObjectProto", "number", ["number","number"])

  QTS_NewArray: (ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewArray", "number", ["number"])

  QTS_NewFloat64: (ctx: JSContextPointer, num: number) => JSValuePointer =
    this.module.cwrap("QTS_NewFloat64", "number", ["number","number"])

  QTS_GetFloat64: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => number =
    this.module.cwrap("QTS_GetFloat64", "number", ["number","number"])

  QTS_NewString: (ctx: JSContextPointer, string: BorrowedHeapCharPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewString", "number", ["number","number"])

  QTS_GetString: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => JSBorrowedCharPointer =
    this.module.cwrap("QTS_GetString", "number", ["number","number"])

  QTS_NewSymbol: (ctx: JSContextPointer, description: BorrowedHeapCharPointer, isGlobal: number) => JSValuePointer =
    this.module.cwrap("QTS_NewSymbol", "number", ["number","number","number"])

  QTS_GetSymbolDescriptionOrKey: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => JSBorrowedCharPointer =
    assertSync(this.module.cwrap("QTS_GetSymbolDescriptionOrKey", "number", ["number","number"]))

  QTS_GetSymbolDescriptionOrKey_MaybeAsync: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => JSBorrowedCharPointer | Promise<JSBorrowedCharPointer> =
    this.module.cwrap("QTS_GetSymbolDescriptionOrKey", "number", ["number","number"], { async: true })

  QTS_IsGlobalSymbol: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => number =
    this.module.cwrap("QTS_IsGlobalSymbol", "number", ["number","number"])

  QTS_IsJobPending: (rt: JSRuntimePointer) => number =
    this.module.cwrap("QTS_IsJobPending", "number", ["number"])

  QTS_ExecutePendingJob: (rt: JSRuntimePointer, maxJobsToExecute: number, lastJobContext: JSContextPointerPointer) => JSValuePointer =
    assertSync(this.module.cwrap("QTS_ExecutePendingJob", "number", ["number","number","number"]))

  QTS_ExecutePendingJob_MaybeAsync: (rt: JSRuntimePointer, maxJobsToExecute: number, lastJobContext: JSContextPointerPointer) => JSValuePointer | Promise<JSValuePointer> =
    this.module.cwrap("QTS_ExecutePendingJob", "number", ["number","number","number"], { async: true })

  QTS_GetProp: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer) => JSValuePointer =
    assertSync(this.module.cwrap("QTS_GetProp", "number", ["number","number","number"]))

  QTS_GetProp_MaybeAsync: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer) => JSValuePointer | Promise<JSValuePointer> =
    this.module.cwrap("QTS_GetProp", "number", ["number","number","number"], { async: true })

  QTS_SetProp: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer, prop_value: JSValuePointer | JSValueConstPointer) => void =
    assertSync(this.module.cwrap("QTS_SetProp", null, ["number","number","number","number"]))

  QTS_SetProp_MaybeAsync: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer, prop_value: JSValuePointer | JSValueConstPointer) => void | Promise<void> =
    this.module.cwrap("QTS_SetProp", null, ["number","number","number","number"], { async: true })

  QTS_DefineProp: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer, prop_value: JSValuePointer | JSValueConstPointer, get: JSValuePointer | JSValueConstPointer, set: JSValuePointer | JSValueConstPointer, configurable: boolean, enumerable: boolean, has_value: boolean) => void =
    this.module.cwrap("QTS_DefineProp", null, ["number","number","number","number","number","number","boolean","boolean","boolean"])

  QTS_Call: (ctx: JSContextPointer, func_obj: JSValuePointer | JSValueConstPointer, this_obj: JSValuePointer | JSValueConstPointer, argc: number, argv_ptrs: JSValueConstPointerPointer) => JSValuePointer =
    assertSync(this.module.cwrap("QTS_Call", "number", ["number","number","number","number","number"]))

  QTS_Call_MaybeAsync: (ctx: JSContextPointer, func_obj: JSValuePointer | JSValueConstPointer, this_obj: JSValuePointer | JSValueConstPointer, argc: number, argv_ptrs: JSValueConstPointerPointer) => JSValuePointer | Promise<JSValuePointer> =
    this.module.cwrap("QTS_Call", "number", ["number","number","number","number","number"], { async: true })

  QTS_ResolveException: (ctx: JSContextPointer, maybe_exception: JSValuePointer) => JSValuePointer =
    this.module.cwrap("QTS_ResolveException", "number", ["number","number"])

  QTS_Dump: (ctx: JSContextPointer, obj: JSValuePointer | JSValueConstPointer) => JSBorrowedCharPointer =
    assertSync(this.module.cwrap("QTS_Dump", "number", ["number","number"]))

  QTS_Dump_MaybeAsync: (ctx: JSContextPointer, obj: JSValuePointer | JSValueConstPointer) => JSBorrowedCharPointer | Promise<JSBorrowedCharPointer> =
    this.module.cwrap("QTS_Dump", "number", ["number","number"], { async: true })

  QTS_Eval: (ctx: JSContextPointer, js_code: BorrowedHeapCharPointer, filename: string, detectModule: EvalDetectModule, evalFlags: EvalFlags) => JSValuePointer =
    assertSync(this.module.cwrap("QTS_Eval", "number", ["number","number","string","number","number"]))

  QTS_Eval_MaybeAsync: (ctx: JSContextPointer, js_code: BorrowedHeapCharPointer, filename: string, detectModule: EvalDetectModule, evalFlags: EvalFlags) => JSValuePointer | Promise<JSValuePointer> =
    this.module.cwrap("QTS_Eval", "number", ["number","number","string","number","number"], { async: true })

  QTS_Typeof: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => OwnedHeapCharPointer =
    this.module.cwrap("QTS_Typeof", "number", ["number","number"])

  QTS_GetGlobalObject: (ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_GetGlobalObject", "number", ["number"])

  QTS_NewPromiseCapability: (ctx: JSContextPointer, resolve_funcs_out: JSValuePointerPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewPromiseCapability", "number", ["number","number"])

  QTS_TestStringArg: (string: string) => void =
    this.module.cwrap("QTS_TestStringArg", null, ["string"])

  QTS_BuildIsDebug: () => number =
    this.module.cwrap("QTS_BuildIsDebug", "number", [])

  QTS_BuildIsAsyncify: () => number =
    this.module.cwrap("QTS_BuildIsAsyncify", "number", [])

  QTS_NewFunction: (ctx: JSContextPointer, func_id: number, name: string) => JSValuePointer =
    this.module.cwrap("QTS_NewFunction", "number", ["number","number","string"])

  QTS_ArgvGetJSValueConstPointer: (argv: JSValuePointer | JSValueConstPointer, index: number) => JSValueConstPointer =
    this.module.cwrap("QTS_ArgvGetJSValueConstPointer", "number", ["number","number"])

  QTS_RuntimeEnableInterruptHandler: (rt: JSRuntimePointer) => void =
    this.module.cwrap("QTS_RuntimeEnableInterruptHandler", null, ["number"])

  QTS_RuntimeDisableInterruptHandler: (rt: JSRuntimePointer) => void =
    this.module.cwrap("QTS_RuntimeDisableInterruptHandler", null, ["number"])

  QTS_RuntimeEnableModuleLoader: (rt: JSRuntimePointer, use_custom_normalize: number) => void =
    this.module.cwrap("QTS_RuntimeEnableModuleLoader", null, ["number","number"])

  QTS_RuntimeDisableModuleLoader: (rt: JSRuntimePointer) => void =
    this.module.cwrap("QTS_RuntimeDisableModuleLoader", null, ["number"])
}
