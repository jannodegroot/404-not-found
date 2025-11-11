import{config,nugetPackagesMetadata}from"../System/System.js";
/**
 * Returns a copy of the current object which is constructed from tchmiconfig.json
 * @preserve (Part of the public API)
 */export function get(){return tchmi_clone_object(config)}
/**
 * Returns a Dictionary with all nuget packages of the project.
 * Key is the Nuget ID.
 * @preserve (Part of the public API)
 */export function getNugetPackagesMetadata(){return tchmi_clone_object(nugetPackagesMetadata)}TcHmi.Config={get,getNugetPackagesMetadata};